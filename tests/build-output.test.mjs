import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage metadata uses the deployed domain", async () => {
  const html = await read("dist/index.html");

  assert.match(html, /<link rel="canonical" href="https:\/\/sandeepdanda\.pages\.dev\/">/);
  assert.match(html, /<meta property="og:image" content="https:\/\/sandeepdanda\.pages\.dev\/og\/home\.png">/);
  assert.match(html, /<meta name="twitter:description" content="Sandeep Danda - software engineer in Seattle\./);
  assert.match(html, /<meta name="twitter:image:alt" content="Sandeep Danda — Software Engineer preview">/);
  assert.doesNotMatch(html, /https:\/\/sandeepdanda\.dev/);
});

test("404 page is excluded from search indexes", async () => {
  const html = await read("dist/404.html");
  assert.match(html, /<meta name="robots" content="noindex,follow">/);
});

test("navigation list contains list items only", async () => {
  const html = await read("dist/index.html");
  const list = html.match(/<ul class="nav-list"[^>]*>([\s\S]*?)<\/ul>/)?.[1] ?? "";

  assert.ok(list, "nav list was not rendered");
  assert.doesNotMatch(list, /nav-indicator/);
  assert.match(html, /<div class="nav-tabs"[^>]*>[\s\S]*nav-indicator/);
});

test("crawler sitemap and generated OG image use deployed assets", async () => {
  const robots = await read("dist/robots.txt");
  const image = await stat(new URL("../dist/og/home.png", import.meta.url));

  assert.match(robots, /Sitemap: https:\/\/sandeepdanda\.pages\.dev\/sitemap-index\.xml/);
  assert.ok(image.size > 0, "home OG image is empty");
});

test("homepage follows the professional-first section order", async () => {
  const html = await read("dist/index.html");
  const sectionOrder = [...html.matchAll(
    /<section[^>]+id="(experience|projects|education|about)"/g,
  )].map((match) => match[1]);
  const navOrder = [...html.matchAll(
    /data-nav-anchor="#(experience|projects|education|about)"/g,
  )].map((match) => match[1]);

  assert.deepEqual(sectionOrder, ["experience", "projects", "education", "about"]);
  assert.deepEqual(navOrder, ["experience", "projects", "education", "about"]);
});

test("section numbers and compact education content stay aligned", async () => {
  const html = await read("dist/index.html");
  const section = (id, nextId) => html.slice(
    html.indexOf(`id="${id}"`),
    html.indexOf(`id="${nextId}"`),
  );

  assert.match(section("experience", "projects"), />01<\/p>/);
  assert.match(section("projects", "education"), />02<\/p>/);
  assert.match(section("education", "about"), />03<\/p>/);
  assert.match(section("about", "__missing__"), />04<\/p>/);
  assert.doesNotMatch(html, /Narayana Junior College|Aryabhatta Concept School/);
});

test("card headlines are semantic and 404 links target homepage sections", async () => {
  const homepage = await read("dist/index.html");
  const notFound = await read("dist/404.html");

  assert.match(homepage, /<h3 class="headline"/);
  assert.doesNotMatch(homepage, /<span class="headline"/);
  assert.match(notFound, /href="\/#experience"/);
  assert.match(notFound, /href="\/#about"/);
});
