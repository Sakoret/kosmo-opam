export const siteConfig = {
  name: "Opam",
  description: "Sistema para mi panaderia donde pueda gfestionar ventas y productos",
  archetype: "saas_tool" as
    | "storefront"
    | "dashboard"
    | "workflow"
    | "saas_tool"
    | "content",
  primaryColor: "#0f766e",
} as const;
