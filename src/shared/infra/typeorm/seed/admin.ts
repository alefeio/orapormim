import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const id = uuidV4();
    const password = await hash("oz301159", 8);

    await connection.query(
        `INSERT INTO usuario (id, nome, password, email, celular, pix, "isAdmin", created_at) 
        VALUES ('${id}', 'Oswaldo Ferreira', '${password}', 'oz@secondchancebr.com', 91981435807, 91981435807, true, 'now()')`
    );

    await connection.close;
}

create().then(() => console.log("Admin criado!"));
