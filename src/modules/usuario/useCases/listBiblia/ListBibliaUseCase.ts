import axios from "axios";

const baseUrl = "https://www.abibliadigital.com.br/api";

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldlZCBNYXIgMjkgMjAyMyAxNzowMjo1NSBHTVQrMDAwMC5hbGV4YW5kcmVmcGVuaGFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTA5Mzc1fQ.B9ocTydDL5eqP5EcgQ7__Zdv9mTl1GXSSgYIOI7npuE";

interface IVersos {
    versao: string;
    livro?: string;
    capitulo?: string;
}

class ListBibliaUseCase {
    async livros() {
        const { data } = await axios.get(`${baseUrl}/books`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    }

    async versos({ versao, livro, capitulo }: IVersos) {
        const { data } = await axios.get(
            `${baseUrl}/verses/${versao}/${livro}/${capitulo}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return data;
    }

    async versosRandom({ versao }: IVersos) {
        const livros = [
            "mt",
            "mc",
            "lc",
            "jo",
            "at",
            "rm",
            "1co",
            "2co",
            "gl",
            "ef",
            "fp",
            "cl",
            "1ts",
            "2ts",
            "1tm",
            "2tm",
            "tt",
            "fm",
            "hb",
            "tg",
            "1pe",
            "2pe",
            "1jo",
            "2jo",
            "3jo",
            "jd",
            "ap",
        ];
        const random = Math.floor(Math.random() * livros.length);

        const { data } = await axios.get(
            `${baseUrl}/verses/${versao}/${livros[random]}/random`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const verso = {
            livro: data.book.name,
            capitulo: data.chapter,
            versiculo: data.number,
            texto: data.text,
        };

        return verso;
    }
}

export { ListBibliaUseCase };
