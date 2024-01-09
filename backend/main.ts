export function add(a: number,b: number): number{
    return a + b;
}
Deno.serve((_request: Request) => {
    return new Response("hello world");
  });