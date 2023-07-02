import developer from "../assets/coding.jpg";

export function About() {
  return (
    <section
      id="about"
      className="w-full h-full bg-gradient-to-b from-zinc-950 from-30% to-black flex flex-col gap-10 py-20 px-10 xl:px-24"
    >
      <div className="flex flex-col justify-center items-center gap-2 animate-show">
        <span className="text-primary text-md font-medium">About Me</span>
        <h3 className="text-white text-3xl font-extrabold text-center inline">
          A Apassionate Developer Who Loves To Code
        </h3>
      </div>

      <article className="w-full flex justify-center items-center flex-wrap md:flex-nowrap gap-10 animate-show">
        <aside className="w-full p-5 flex justify-center items-center">
          <img
            className="rounded-lg shadow-md shadow-[20px_20px_0] shadow-primary"
            src={developer}
          />
        </aside>

        <div className="w-full flex flex-col gap-5 justify-center">
          <article className="text-left flex flex-col gap-5">
            <h4 className="text-xl md:text-2xl text-white font-bold">My Bio</h4>
            <p className="text-gray-300 text-md md:text-lg font-light">
              Durante mis estudios universitarios en Ciencias Medicas, descubrí
              <b> mi interés por la programación</b> y decidí explorar más sobre
              el desarrollo web. Aunque mi formación académica no estaba
              relacionada con la informática, me di cuenta de la capacidad que
              poseia para destacar en el mundo del <b> Desarrollo Digital.</b>
            </p>

            <p className="text-gray-300 text-md md:text-lg font-light">
              Comencé mi viaje como desarrollador front-end de forma
              <b> autodidacta</b>, aprendiendo por mi cuenta a través de cursos
              en línea, tutoriales y proyectos personales. Aprendí lenguajes
              como <b className="text-yellow-500">Javascript</b> y frameworks
              relacionados a este para la construcción de sitios web. Termine
              enamorado del ecosistema de <b className="text-sky-500">React</b>.
              <b>
                "La autodisciplina y la motivación han sido clave en mi éxito
                como desarrollador autodidacta".
              </b>
            </p>

            <p className="text-gray-300 text-md md:text-lg font-light">
              A lo largo de mi aprendizaje, he enfrentado desafíos y obstáculos,
              pero siempre he mantenido mi pasión por aprender y mejorar mis
              habilidades. Estoy constantemente buscando nuevas formas de
              mejorar mi trabajo y estar al tanto de las últimas tendencias en
              tecnología. Estoy siempre abierto a nuevas oportunidades y
              desafíos en el campo de la programación. ¡Estoy emocionado de
              seguir aprendiendo y creando soluciones innovadoras en el mundo
              del desarrollo web!
            </p>
          </article>
        </div>
      </article>
    </section>
  );
}
