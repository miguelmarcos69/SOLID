(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    // Crear una película
    function createMovie( {cast, description, rating, title} : Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor',birthdate);
        return true;        

    }

    

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {

        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500
        if ( isRetired ) return 3000;
        return 4000;

        
    }
})();