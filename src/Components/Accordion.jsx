import CourseContent from "./CourseContent";

const Accordion = () => {
  const sections = [
    {
      title: 'Part 1 Lorem Ipsum Dolor Sit Amet',
      duration: '02:00:00',
      difficulty: 'Medium',
      progress: 45,
      tasks: [
        { name: 'Video 1', duration: '10:00' },
        { name: 'Article 1', duration: '10:00' },
        { name: 'Quiz 1', duration: '10:00' },
        { name: 'Coding Exercise 1', duration: '10:00' },
        { name: 'Combined Resource 1', duration: '10:00' },
      ],
      file:5
    },
    {
      title: 'Part 2 Lorem Ipsum Dolor Sit Amet',
      duration: '02:00:00',
      difficulty: 'Medium',
      progress: 20,
      tasks: [
        { name: 'Video 2', duration: '10:00' },
        { name: 'Article 2', duration: '10:00' },
        { name: 'Quiz 2', duration: '10:00' },
      ],
      file:12
    },
    {
      title: 'Part 3 Lorem Ipsum Dolor Sit Amet',
      duration: '02:00:00',
      difficulty: 'Medium',
      progress: 10,
      tasks: [
        { name: 'Video 3', duration: '10:00' },
        { name: 'Article 3', duration: '10:00' },
        { name: 'Quiz 3', duration: '10:00' },
      ],
      file:12
    },
  ];

  return (
    <div className="flex flex-col ml-0 items-stretch w-full mt-6 bg-white border border-gray-200 rounded-lg">
      {sections.map((section, index) => (
        <div key={index} className="flex-grow">
          <CourseContent
            key={index}
            title={section.title}
            duration={section.duration}
            difficulty={section.difficulty}
            progress={section.progress}
            tasks={section.tasks}
            file={section.file}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;