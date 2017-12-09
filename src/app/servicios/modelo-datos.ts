export class Usuario {
    id = '';
    nombre = '';
    apellido = '';
    telefono = '';
    correo = '';
    contrasenia = '';
    poblacion?: Poblacion;
}

export interface ModeloLista {
    id: string,
    nombre: string
}

export interface Pais {
    nombre: string;
}

export interface PaisId extends Pais {
    id?: string;
}

export interface EstadoRegion {
    idPais: string;
    pais: string;
    nombre: string;
}

export interface EstadoRegionId extends EstadoRegion {
    id?: string;
}

export interface Poblacion {
    idPais: string;
    pais: string;
    idEstadoRegion: string;
    estadoRegion:  string;
    nombre: string;
}

export interface PoblacionId extends Poblacion {
    id?: string;
}

export class Categoria {
    id = '';
    nombre = '';
    subCategoriaLista?: SubCategoriaSimple[];
    numeroMensajes = 0;
}

export class SubCategoriaSimple {
    id = '';
    nombre = '';
    numeroMensajes = 0;
}

export class SubCategoria {
    id = 0;
    nombre = '';
    categoria: Categoria;
}

export class Imagen {
    id = '';
    imagen = '';
}

export class Mensaje {
    id = '';
    creacion = '';
    contenido = '';
    subCategoria: SubCategoriaSimple;
    usuario: Usuario;
    imagen?: Imagen[];
}

export class RespuestaFiltro {
    idCategoria = 0;
    idSubCategoria = 0;
    idEstadoRegion = 0;
    idPoblacion = 0;
    cancelar = 0;
}