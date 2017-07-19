import { PeliculaServiceProvider } from './../../providers/pelicula-service/pelicula-service';
import { NuevaPeliculaPage } from './../nueva-pelicula/nueva-pelicula';
import { DetallePeliculaPage } from './../detalle-pelicula/detalle-pelicula';
import { PeliculaModel } from './../../shared/peliculaModel';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
  providers: [PeliculaServiceProvider]
})
export class PeliculasPage {

  private peliculas: PeliculaModel[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public ps: PeliculaServiceProvider) {
  }

  ionViewDidLoad() {
    this.ps.getPeliculas().then((peliculas: PeliculaModel[]) => {
      this.peliculas = peliculas;
    });

    /*this.peliculas = [
      new PeliculaModel('Star Wars: Episodio I: La amenaza fantasma', 'Ambientada treinta años antes que "La guerra de las galaxias" (1977), muestra la infancia de Darth Vader, el pasado de Obi-Wan Kenobi y el resurgimiento de los Sith, los caballeros Jedi dominados por el Lado Oscuro. La Federación de Comercio ha bloqueado el pequeño planeta de Naboo, gobernado por la joven Reina Amidala; se trata de un plan ideado por Sith Darth Sidious, que, manteniéndose en el anonimato, dirige a los neimoidianos, que están al mando de la Federación. El Jedi Qui-Gon Jinn y su aprendiz Obi-Wan Kenobi convencen a Amidala para que vaya a Coruscant, la capital de la República y sede del Consejo Jedi, y trate de neutralizar esta amenaza. Pero, al intentar esquivar el bloqueo, la nave real resulta averiada, viéndose así obligada la tripulación a aterrizar en el desértico y remoto planeta de Tatooine...', true),
      new PeliculaModel('Star Wars: Episodio II: El ataque de los clones', 'Corren tenebrosos tiempos para la República, que continúa envuelta en luchas y sumida en el caos. Un movimiento separatista, formado por centenares de planetas y poderosas alianzas encabezadas por el misterioso conde Dooku, amenaza la galaxia. Ni siquiera los Jedi parecen capaces de conjurar el peligro. Este movimiento provoca el estallido de las guerras clones, que representa el principio del fin de la República. Para allanar el camino, los separatistas intentan asesinar a la senadora Padme Amidala. Para evitar futuros atentados, su seguridad es encomendada a dos caballeros Jedi...', true),
      new PeliculaModel('Star Wars: Episodio III: La venganza de los Sith', 'Último capítulo de la trilogía de precuelas de Star Wars, en el que Anakin Skywalker definitivamente se pasa al lado oscuro. En el Episodio III aparece el General Grievous, un ser implacable mitad-alien mitad-robot, el líder del ejército separatista Droid. Los Sith son los amos del lado oscuro de la Fuerza y los enemigos de los Jedi. Fueron prácticamente exterminados por los Jedi hace mil años, pero esta orden del mal sobrevivió en la clandestinidad.', true),
      new PeliculaModel('Star Wars: Episodio IV: Una nueva esperanza', 'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del Emperador. El intrépido y joven Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo e intentar rescatar a la princesa para volver a instaurar la justicia en el seno de la galaxia.', true),
      new PeliculaModel('Star Wars: Episodio V: El imperio contraataca', 'Tras un ataque sorpresa de las tropas imperiales a las bases camufladas de la alianza rebelde, Luke Skywalker, en compañía de R2D2, parte hacia el planeta Dagobah en busca de Yoda, el último maestro Jedi, para que le enseñe los secretos de la Fuerza. Mientras, Han Solo, la princesa Leia, Chewbacca, y C3PO esquivan a las fuerzas imperiales y piden refugio al antiguo propietario del Halcón Milenario, Lando Calrissian, en la ciudad minera de Bespin, donde les prepara una trampa urdida por Darth Vader. ', true),
      new PeliculaModel('Star Wars: Episodio VI: El retorno del Jedi', 'Para ir a Tatooine y liberar a Han Solo, Luke Skywalker y la princesa Leia deben infiltrarse en la peligrosa guarida de Jabba the Hutt, el gángster más temido de la galaxia. Una vez reunidos, el equipo recluta a tribus de Ewoks para combatir a las fuerzas imperiales en los bosques de la luna de Endor. Mientras tanto, el Emperador y Darth Vader conspiran para atraer a Luke al lado oscuro, pero el joven está decidido a reavivar el espíritu del Jedi en su padre. La guerra civil galáctica termina con un último enfrentamiento entre las fuerzas rebeldes unificadas y una segunda Estrella de la Muerte, indefensa e incompleta, en una batalla que decidirá el destino de la galaxia.', true),
      new PeliculaModel('Star Wars: Episodio VII: El despertar de la fuerza', 'Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico. A los héroes de antaño, que luchan ahora en la Resistencia, se suman nuevos héroes: Poe Dameron, un piloto de caza, Finn, un desertor de la Primera Orden, Rey, una joven chatarrera, y BB-8, un androide rodante. Todos ellos luchan contra las fuerzas del Mal: el Capitán Phasma, de la Primera Orden, y Kylo Ren, un temible y misterioso personaje que empuña un sable de luz roja', true),
      new PeliculaModel('Rouge One', 'El Imperio Galáctico ha terminado de construir el arma más poderosa de todas, la Estrella de la muerte, pero un grupo de rebeldes decide realizar una misión de muy alto riesgo: robar los planos de dicha estación antes de que entre en operaciones, mientras se enfrentan también al poderoso Lord Sith conocido como Darth Vader, discípulo del despiadado Emperador Palpatine. Film ambientado entre los episodios III y IV de Star Wars.', true)
    ]*/
  }

  mostrarDetalle(pelicula: PeliculaModel){
    let modal = this.modalCtrl.create(DetallePeliculaPage, {"pelicula":pelicula});
    modal.present();
  }

  nuevaPelicula(){
    let modal = this.modalCtrl.create(NuevaPeliculaPage);
    modal.present();

    modal.onDidDismiss(pelicula =>{
      if(pelicula){
        this.peliculas.push(pelicula);
      }
    })
  }

  setListaPeliculasStyle(pelicula){
    let styles = {
      'color': pelicula.estrenada ? 'green':'red',
      'font-weight': pelicula.estrenada ? 'bold' : 'none'
    }

    return styles;
  }

}
