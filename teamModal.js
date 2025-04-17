// Data-driven team list with modal injection
const teamMembers = [
    {
      id: "roy",
      name: "Roy Bensindahl",
      title: "Verkställande Tankchef",
      email: "roy.bensindahl@mackenmacken.se",
      quote: "Jag har hört vad du sa, men jag tänker ändå stå kvar här.",
      story: "Roy har stått vid samma pump sedan 1984. Ingen vet vad han väntar på. Inte ens Roy.",
      image: "images/roy.png"
    },
    {
      id: "roger",
      name: "Roger Dieselsson",
      title: "Vice VD för Vänsterbackning",
      email: "roger.dieselsson@mackenmacken.se",
      quote: "Allt går att backa. Utom ansvar.",
      story: "Roger backade in på jobbet 1996. Han har aldrig slutat backa.",
      image: "images/roger.png"
    },
    {
      id: "edvard",
      name: "Edvard Svarthammar",
      title: "IT-ansvarig (ingen vet varför)",
      email: "edvard.svarthammar@mackenmacken.se",
      quote: "Har du provat att inte fråga mig?",
      story: "Ingen vet vad Edvard egentligen gör. Det inkluderar Edvard.",
      image: "images/edvard.png"
    },
    {
      id: "sten",
      name: "Sten Gustavsson",
      title: "Klientrepresentant",
      email: "sten.gustavsson@mackenmacken.se",
      quote: "Jag var här förra veckan. Samma ärende. Fortfarande arg.",
      story: "Sten är inte anställd. Han bara dyker upp. Och alla lyssnar.",
      image: "images/sten.png"
    },
    {
      id: "maud",
      name: "Maud Tankelund",
      title: "Samordnare för saker som ingen annan tar tag i",
      email: "Maud.Tankelund@mackenmacken.se",
      quote: "Jag hinner – om ingen stör mig med nåt oviktigt. Som IT-support.",
      story: "Maud började egentligen bara hjälpa till med att hämta filterkaffe och ställa frågor som 'har ni provat att starta om den?'. Tio år senare är det hon som håller ihop hela Macken – inte för att hon ville, utan för att någon var tvungen. Hon vet var nycklarna är, när leveranser kommer trots att ingen har sagt något, och exakt hur man får Roy att sluta prata med kunder som bara 'tittar runt'.",
      image: "images/maud.png"
    }
  ];
  
  function injectTeamSection() {
    const teamSection = document.createElement("section");
    teamSection.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">Vårt team</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${teamMembers.map(member => `
          <div class="bg-white rounded-2xl shadow-md p-6">
            <div class="flex items-center gap-4 mb-4">
              <img
                src="${member.image}"
                alt="${member.name}"
                onclick="showModal('${member.id}')"
                class="w-12 h-12 rounded-full object-cover transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-pink-400 cursor-pointer"
              />
              <div>
                <h3 class="text-xl font-semibold">${member.name}</h3>
                <p class="text-sm text-gray-500">${member.title}</p>
              </div>
            </div>
            <p class="text-sm mb-4">“${member.quote}”</p>
            <div class="flex items-center text-sm text-blue-600 gap-2">
              📧 <a href="mailto:${member.email}">${member.email}</a>
            </div>
          </div>
        `).join("")}
      </div>`;
  
    document.body.querySelector("section:nth-of-type(3)").after(teamSection);
    injectModalStructure();
  }
  
  function injectModalStructure() {
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal-backdrop";
    modalDiv.className = "hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
    modalDiv.innerHTML = `
      <div id="modal-content" class="bg-white dark:bg-pink-100 text-black max-w-md w-full p-6 rounded-lg shadow-xl relative">
        <button onclick="hideModal()" class="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800">&times;</button>
        <div id="modal-body"></div>
      </div>`;
  
    document.body.appendChild(modalDiv);
  }
  
  function showModal(id) {
    const member = teamMembers.find(m => m.id === id);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
      <div class="text-center space-y-4">
        <img src="${member.image}" alt="${member.name}" class="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-pink-400">
        <h2 class="text-xl font-bold">${member.name}</h2>
        <p class="text-sm text-gray-600">${member.title}</p>
        <p class="italic">“${member.quote}”</p>
        <p class="text-sm text-gray-700">${member.story}</p>
        <a href="mailto:${member.email}" class="text-blue-600 underline block mt-2">${member.email}</a>
      </div>`;
  
    document.getElementById("modal-backdrop").classList.remove("hidden");
  }
  
  function hideModal() {
    document.getElementById("modal-backdrop").classList.add("hidden");
  }
  
  // Auto-inject on load
  window.addEventListener("DOMContentLoaded", injectTeamSection);
