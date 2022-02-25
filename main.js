

let projectsUrl = 'http://127.0.0.1:8000/api/projects/'

let getProjects = () => {
    fetch(projectsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buildProjects(data)
    })
}

let buildProjects = (projects) => {
    let projectsWrapper = document.getElementById('projects--wrapper')
    for (let i=0; i< projects.length; i++) {
        let project = projects[i]
        
        let projectCard = `
            <div class="project--card">
                    <img src="http://127.0.0.1:8000${project.featured_image}"/>
                <div>
                    <div class="card--header">
                        <h3>${project.title}</h3>
                        <strong class="vote--option">&#43;</strong>
                        <strong class="vote--option">&#8722;</strong>
                    </div>
                </div>
                
            <div>
        `
        projectsWrapper.innerHTML += projectCard
    }

}   

getProjects()