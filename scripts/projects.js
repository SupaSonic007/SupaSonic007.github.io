window.onload = loadProjects;

function loadProjects() {
    let project_list = document.getElementById("proj-list");

    projects = [
        {
            title: "D&D Campaign Manager",
            desc: "Dungeons and dragons campaign manager made to easily store, retrieve, and share data relating to campaigns and characters.",
            href: "https://github.com/SupaSonic007/DnD-Campaign-Manager",
            tag: "proj",
        },
        {
            title: "Dev Site",
            desc: "The github repository for the files that make this site exist and as beautiful as you can see.",
            href: "https://github.com/SupaSonic007/SupaSonic007.github.io",
            tag: "proj",
        },
        {
            title: "Flask Server for WINSTON",
            desc: "The project website for WINSTON, the Walking IK-Based Navigation System Transmitted Vver Networks, which also has a forums site and livestream page attached.",
            href: "https://github.com/SupaSonic007/Flask-Server-WINSTON",
            tag: "proj",
        },
        {
            title: "Artificial Neural Network",
            desc: "My first attempt at building an ANN based off of hadican's medium post (Referenced on github)",
            href: "https://github.com/SupaSonic007/artificial-neural-network",
            tag: "tool",
        },
        {
            title: "Convolutional Neural Network",
            desc: "My first attempt at building a CNN based off of a towardsdatascience post (URL in main file)",
            href: "https://github.com/SupaSonic007/convolutional-neural-network",
            tag: "proj",
        },
        {
            title: "Ball Pivoting Algorithm",
            desc: "Implementation of the Ball Pivoting Algorithm for turning a 3D Point cloud into a mesh with edges and faces based off of vertex distance",
            href: "https://github.com/SupaSonic007/Ball-Pivoting-Algorithm",
            tag: "tool",
        },
        {
            title: "Host File Editor Tool",
            desc: "Tool for editing your computers host files. This can be used to block malicious websites by pointing URLs to internal IPs or to help when developing a website as you can point the nameserver to your local device for development of the site etc.",
            href: "https://github.com/SupaSonic007/Host-File-Editor-Tool",
            tag: "tool",
        },
        {
            title: "COD Black Ops II Weapons DB Scraper",
            desc: "A datascrape of the call of duty fandom to get Black Ops II weapon data and convert it into a database",
            href: "https://github.com/SupaSonic007/CoD-Black-Ops-II-Weapons",
            tag: "script",
        }
    ];

    projects.forEach((project) => {
        let anchor = document.createElement("a");
        anchor.href = project.href;

        let card = document.createElement("div");
        card.classList.add("card", project.tag);

        let hero = document.createElement("img");
        hero.classList.add("hero");

        let title = document.createElement("span");
        title.classList.add("title");
        title.innerText = project.title;

        let desc = document.createElement("span");
        desc.classList.add("description");
        desc.innerText = project.desc;

        card.appendChild(hero);
        card.appendChild(title);
        card.appendChild(desc);
        anchor.appendChild(card);
        project_list.appendChild(anchor);
    });
}
