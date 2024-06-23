let info = {
  nome: "Marianne Firmino",
  profissional: "Análise e Desenvolvimento de Sistemas",
  imagem: "https://github.com/marianneoliveira93.png",
  
  
  github: "https://github.com/marianneoliveira93/marianneoliveira93",
  linkedin: "https://www.linkedin.com/in/marianne-firmino-a36863174/",
 instagram:"https://www.instagram.com/mariannefirmino/",
  bio: "Graduada em Licenciatura em Ciências Biológicas pela UFPE, com Mestrado em Genética e Bioinformática. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas. Tenho experiências em Python, SQL, MySQL, Power BI e Linux.Tenho como objetivo me desenvolver e aplicar minhas habilidades na área de programação"
};

document.getElementyById('imagem').src = info.imagem;
document.getElementyById('nome').inmerHTML = info.nome;
document.getElementyById('profissional').inmerHTML = info.profissional;
document.getElementyById('bio').inmerHTML = info.bio;

document.getElementyById('github').href = info.github;
document.getElementyById('linkedin').href = info.linkedin;
document.getElementyById('instagram').href = info.instagram;