import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Criar Categoria Controller", () => {
    it("teste", async () => {
        await request(app).get("/categorias").expect(200);
    });
});
