function AcademicPerformance() {
    const subjects = [
        { name: "Math", grade: "A+" },
        { name: "Science", grade: "A" },
        { name: "English", grade: "A-" },
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>Subject</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {subjects.map((subject, index) => (
                <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.grade}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default AcademicPerformance;
