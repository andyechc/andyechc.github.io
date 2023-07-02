import { useState } from "react";

export function Bio() {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <article className="w-full text-left flex flex-col justify-center gap-5">
      <h4 className="text-xl md:text-2xl text-white font-bold">My Bio</h4>

      <p className="flex flex-col gap-5 justify-center">
        <p className="text-gray-300 text-md md:text-lg font-light">
          Durante mis estudios universitarios en Ciencias Medicas, descubrí
          <b> mi interés por la programación</b> y decidí explorar más sobre el
          desarrollo web. Aunque mi formación académica no estaba relacionada
          con la informática, me di cuenta de la capacidad que poseia para
          destacar en el mundo del <b> Desarrollo Digital.</b>
        </p>

        <p className="text-gray-300 text-md md:text-lg font-light">
          Comencé mi viaje como desarrollador front-end de forma
          <b> autodidacta</b>, aprendiendo por mi cuenta a través de cursos en
          línea, tutoriales y proyectos personales. Aprendí lenguajes como{" "}
          <b className="text-yellow-500">Javascript</b> y frameworks
          relacionados a este para la construcción de sitios web. Termine
          enamorado del ecosistema de <b className="text-sky-500">React</b>
        </p>

        <details className="text-md text-primary">
          <summary onClick={handleMore} className="mb-5">
            {more ? "Ver Menos" : "Ver Mas"}
          </summary>
          <p className="flex flex-col gap-5">
            <b className="text-md text-white font-bold">
              "La autodisciplina y la motivación han sido clave en mi éxito como
              desarrollador autodidacta".
            </b>

            <p className="text-gray-300 text-md md:text-lg font-light">
              A lo largo de mi aprendizaje, he enfrentado desafíos y obstáculos,
              pero siempre he mantenido mi pasión por aprender y mejorar mis
              habilidades.{" "}
              <b>
                Estoy constantemente buscando nuevas formas de mejorar mi
                trabajo y estar al tanto de las últimas tendencias en
                tecnología.
              </b>{" "}
              Estoy siempre abierto a nuevas oportunidades y desafíos en el
              campo de la programación.
            </p>

            <b className="text-md text-white font-bold">
              ¡Estoy emocionado de seguir aprendiendo y creando soluciones
              innovadoras en el mundo del desarrollo web!
            </b>
          </p>
        </details>
      </p>
    </article>
  );
}
