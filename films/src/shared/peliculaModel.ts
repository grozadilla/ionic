export class PeliculaModel{
    constructor(public titulo: String, public descripcion: String, public estrenada: Boolean){}

    static fromJSON(data: any){
        if(!data.show_title){
            throw(new Error("Estructura de JSON incorrecta"));
        }

        return new PeliculaModel(data.show_title, data.summary, true);
    }
}