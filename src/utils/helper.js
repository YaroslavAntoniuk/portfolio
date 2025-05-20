export const getTechDetails = (project) => {
  const techSections = [];
  let totalTechCount = 0;

  if (project.technologies) {
    totalTechCount += project.technologies.length;
    techSections.push({
      title: 'Technologies Used',
      techs: project.technologies,
    });
  }

  if (project.technologiesMobile) {
    totalTechCount += project.technologiesMobile.length;
    techSections.push({
      title: 'Mobile Technologies',
      techs: project.technologiesMobile,
    });
  }

  if (project.technologiesWeb) {
    totalTechCount += project.technologiesWeb.length;
    techSections.push({
      title: 'Web Technologies',
      techs: project.technologiesWeb,
    });
  }

  if (project.technologiesBackend) {
    totalTechCount += project.technologiesBackend.length;
    techSections.push({
      title: 'Backend Technologies',
      techs: project.technologiesBackend,
    });
  }

  return { techSections, totalTechCount };
};

