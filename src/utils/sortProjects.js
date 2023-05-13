const sortProjects = (projects) => {
    const sortedProjectCards = projects.sort(
        (a, b) => b.fields.startYear - a.fields.startYear
    );
    return sortedProjectCards;
};

const renderProjects = (Component, projects) => {
    const sortedList = sortProjects(projects);
    return sortedList.map((project) => (
        <Component key={project.fields.projectLinkUrl} project={project} />
    ));
};

export { renderProjects };
