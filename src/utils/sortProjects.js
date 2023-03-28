const sortProjects = (projects) => {
    const sortedProjectCards = projects.sort(
        (a, b) => b.fields.startYear - a.fields.startYear
    );
    return sortedProjectCards;
};

const renderProjects = (Component, cards) => {
    const sortedCards = sortProjects(cards);
    return sortedCards.map((card) => (
        <Component key={card.fields.slug} card={card} />
    ));
};

export { renderProjects };
