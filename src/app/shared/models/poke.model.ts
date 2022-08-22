export interface Favorite {
    name: string,
    alias: string,
    createdAt: Date,
    //Tuve el atrevimiento de agregar imágenes a las cartas. Es por eso que he agregado
    //un cuarto campo llamado sprites.
    sprites: any
}