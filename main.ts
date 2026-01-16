import { Hono } from "@hono/hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello from the Trees");
});

Deno.serve(app.fetch);

interface Tree {
  id: string;
  species: string;
  age: number;
  location: string;
}

const setItem = (key: string, value: Tree) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string): Tree | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const oak: Tree = {
  id: "3",
  species: "oak",
  age: 3,
  location: "Jim's Park",
};

setItem(`trees_${oak.id}`, oak);
const newTree = getItem(`trees_${oak.id}`);
console.log(newTree);

app.post("/trees", async (c) => {
  const { id, species, age, location } = await c.req.json();
  const tree: Tree = { id, species, age, location };
  setItem(`trees_${id}`, tree);
  return c.json({
    message: `We just added a ${species} tree!`,
  });
});
