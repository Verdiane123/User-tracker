<template>
  <div class="container" :class="{ dark: darkMode }"> <!--Classe dark-->
    <!--Barre de navigation-->
    <header>
    <div class="navigation"><!--Première section de la barre de navigation-->
      <section class="barre_d_icones">
        <div class="icone_accueil">
          <font-awesome-icon
            :icon="['fas', 'home']"
            class="icone_accueil_logo"
          />
        </div>
        <nav>
          <ul class="icones_d_options">
            <li class="favoris">
              <a href="#" title="Favoris"
                ><font-awesome-icon :icon="['fas', 'star']"
              /></a>
            </li>
            <li class="icone_centrale">
              <a href="#" title="Paramètres"
                ><font-awesome-icon :icon="['fas', 'cog']"
              /></a>
            </li>
            <li class="icone_centrale">
              <a href="#" title="Actualités"
                ><font-awesome-icon :icon="['fas', 'futbol']"
              /></a>
            </li>
            <li class="icone_centrale">
              <a href="#" title="Messages"
                ><font-awesome-icon :icon="['fas', 'envelope']"
              /></a>
            </li>
            <li class="icone_centrale">
              <a href="#" title="Notifications"
                ><font-awesome-icon :icon="['fas', 'bell']"
              /></a>
            </li>
            <li>
              <img src="../assets/images/peter.jpg" alt="Photo de profil" />
            </li>
          </ul>
        </nav>
        <div @click="toggleDropdown" class="menu_hamburger">
          <font-awesome-icon :icon="toggleIcon" class="icone_hamburger" />
        </div>
      </section>
      <section class="barre_d_options"><!--Deuxième section de la barre de navigation-->
        <div class="options">
          <div class="option_creation" @click="addRandomCardToCards">
            <span>Créer</span>
            <span class="icone_creation"><font-awesome-icon :icon="['fas', 'plus']"/></span>
          </div>
          <div class="bordure_option_creation"></div>
          <div class="barre_de_recherche">
            <span>Rechercher</span>
            <label for="recherche">
              <span class="icone_de_recherche"><font-awesome-icon :icon="['fas', 'search']"/></span>
              <input v-model="searchQuery" type="text" placeholder="Nom d'une ressource"/>
            </label>
          </div>
        </div>
        <!--Bouton d'activation du mode sombre-->
        <div class="mode">
          <label class="switch" @click="toggleDarkMode">
            <input type="checkbox" :checked="darkMode" @input="toggleDarkMode" />
            <span class="slider round"></span>
          </label>
        </div>
      </section>
      <!-- ---Barre déroule pour les petits écrans- -->
      <section
        class="barre_deroulante"
        :class="{ barre_deroulante: true, open: isDropdownOpen }"
      >
        <nav>
          <ul class="liste_barre_deroulante">
            <li class="icones_secondaires">
              <span><font-awesome-icon :icon="['fas', 'star']" /></span>Favoris
            </li>
            <li class="icones_secondaires">
              <span><font-awesome-icon :icon="['fas', 'cog']" /></span
              >Paramètres
            </li>
            <li class="icones_secondaires">
              <span><font-awesome-icon :icon="['fas', 'futbol']" /></span
              >Actualités
            </li>
            <li class="icones_secondaires">
              <span><font-awesome-icon :icon="['fas', 'envelope']" /></span
              >Messages
            </li>
            <li class="icones_secondaires">
              <span><font-awesome-icon :icon="['fas', 'bell']" /></span
              >Notifications
            </li>
            <li>
              <span><font-awesome-icon :icon="['fas', 'user']" /></span>Profil
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </header><!--Fin de la barre de navigation-->

  <!--Partie principale-->
  <main>
    <section class="cartes">
      <div class="grille_des_cartes"><!--Message pour recherche infructueuse-->

        <!--Affichage dynamique des cartes-->
        <div v-if="filteredCards.length === 0" class="message_infructueux">
          Aucun résultat trouvé pour "{{ searchQuery }}".
        </div>
        <div
          v-else
          class="carte"
          v-for="(card, index) in filteredCards"
          :key="index"
        >
          <div class="section_de_carte">
            <div class="entete_carte">
              <p>
                <span>
                  <font-awesome-icon :icon="['fas', card.iconClass]" />
                </span>
                <span>
                  <font-awesome-icon :icon="['fas', 'futbol']" />
                </span>
                <span>{{ card.userName }}</span>
              </p>
            </div>
          </div>
          <div class="section_de_carte">
            <img :src="card.src" :alt="card.alt" />
          </div>
          <div class="section_de_carte">
            <div class="informations">
              <p class="titre">{{ card.title }}</p>
              <p class="description">{{ card.description }}</p>
              <div class="infos">
                <p class="date_modif">
                  <span>Modifié le</span> <br />
                  {{ card.modificationDate }}
                </p>
                <p class="application">
                  <span>Application</span> <br />
                  {{ card.application }}
                </p>
              </div>
              <p class="options_de_fin">
                <span>
                  <font-awesome-icon :icon="['fas', 'eye']" />
                </span>
                <span>
                  <font-awesome-icon :icon="['fas', 'edit']" />
                </span>
                <span>
                  <font-awesome-icon :icon="['fas', 'copy']" />
                </span>
                <span>
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </span>
                <span>
                  <font-awesome-icon :icon="['fas', 'comment']" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main><!--Fin de la partie principale -->
  </div>
</template>

<!--SCRIPT-->
<script lang="js">
import { fas } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      darkMode: true,
      searchQuery: "",
      isDropdownOpen: false,
      // Cartes affichées de manière statique
      cards: [
        {
          src: require("../assets/images/monde.png"),
          alt: "Carte du monde",
          title: "Afrique",
          description: "Carte mettant en exergue l'Afrique dans toute sa ...",
          modificationDate: "13/11/2020",
          userName: "Dossi",
          iconClass: "square",
          application: "Mon application"
      },
      {
          src: require("../assets/images/lyon.png"),
          alt: "Carte de Lyon",
          title: "Lyon",
          description: "Petite image de la ville de Lyon qui fascine tous les ...",
          modificationDate: "14/11/2020",
          userName: "Lisa",
          iconClass: "square",
          application: "Mon application"
      },
      {
          src: require("../assets/images/lyon.png"),
          alt: "Carte de Lyon",
          title: "Lyon",
          description: "Villeurbanne ! La ville qui me fascine énormément...",
          modificationDate: "14/11/2020",
          userName: "Lou",
          iconClass: "square",
          application: "Mon application"
      },
        {
          src: require("../assets/images/lyon.png"),
          alt: "Carte de Bron",
          title: "Bron",
          description: "L'une des plus belles villes de la région lyonnaise...",
          modificationDate: "04/03/2021",
          userName: "Jane Doe",
          iconClass: "square",
          application: "Mon application"
      },
      ],

      // Cartes affichées de manière dynamique avec le bouton +
      randomCards: [
      {
        src: require("../assets/images/monde.png"),
        alt: "Carte d'Australie",
        title: "Australie",
        description: "L'une des meilleures destinations au monde",
        modificationDate: "01/01/2022",
        userName: "Amaro",
        iconClass: "square",
        application: "Mon application"
      },
      {
        src: require("../assets/images/lyon.png"),
        alt: "Carte de Vénissieux",
        title: "Vénissieux",
        description: "L'une des villes en plein essor avec de nouveaux restaurants...",
        modificationDate: "01/03/2022",
        userName: "Tiana",
        iconClass: "square",
        application: "Mon application"
      },
      {
        src: require("../assets/images/monde.png"),
        alt: "Carte de France",
        title: "France",
        description: "C'est l'un des plus beaux pays de l'Europe avec ses paysages...",
        modificationDate: "01/07/2022",
        userName: "Allan",
        iconClass: "square",
        application: "Mon application"
      },
        {
          src: require("../assets/images/monde.png"),
          alt: "Carte de France",
          title: "France",
          description: "Ce pays abrite la capitale de la mode. Paris, une ville...",
          modificationDate: "01/01/2023",
          userName: "Roger",
          iconClass: "square",
          application: "Mon application"
        },
      ],
    };
  },

  // Icone d'ouverture et de fermeture de la barre déroulante
  computed: {
    toggleIcon() {
      return this.isDropdownOpen ? 'minus' : 'bars'
    },

    // Fonction de filtre des cartes
    filteredCards() {
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  methods: {
    // Fonction d'ouverture et de fermeture de la barre déroulante
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },

    // Fonction de tri des cartes dynamiques
    addRandomCardToCards() {
      const randomIndex = Math.floor(Math.random() * this.randomCards.length);
      const randomCard = this.randomCards[randomIndex];

    // Ajoute des cartes 
      this.cards.push(randomCard);
    },

    // Fonction d'activation et de désactivation du mode sombre
    toggleDarkMode() {
    this.darkMode = !this.darkMode;
  },

  },

  // Importation de la bibliothèque d'icones Fontawesome
  setup() {
    return {
      fas,
    };
  },
};
</script>
