interface ICreateUsuarioDTO {
    nome: string;
    password?: string;
    email?: string;
    celular?: string;
    pix?: string;
    id?: string;
    avatar?: string;
    profissao?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    site?: string;
    categoria_id?: string;
    perfil_id?: string;
}

export { ICreateUsuarioDTO };
