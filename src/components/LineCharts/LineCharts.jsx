import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineCharts = () => {
    
    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 5, chemistry: 40, math: 78 },
        { id: 2, name: 'Bob', physics: 78, chemistry: 85, math: 80 },
        { id: 3, name: 'Charlie', physics: 92, chemistry: 88, math: 95 },
        { id: 4, name: 'David', physics: 28, chemistry: 84, math: 90 },
        { id: 5, name: 'Emma', physics: 7, chemistry: 75, math: 38 },
        { id: 6, name: 'Frank', physics: 95, chemistry: 61, math: 97 },
        { id: 7, name: 'Grace', physics: 82, chemistry: 28, math: 15 },
        { id: 8, name: 'Hannah', physics: 79, chemistry: 83, math: 77 },
        { id: 9, name: 'Ian', physics: 17, chemistry: 89, math: 84 },
        { id: 10, name: 'Jack', physics: 90, chemistry: 88, math: 92 }
    ];
    return (
        <div className='p-10 bg-red-100 my-10 rounded-md'>
            {/* <LineChart width={1120} height={500} data={subjectMarksData}>
                <Line dataKey={'physics'} type={'monotoneX'} stroke='#F004B8'></Line>
            </LineChart> */}
            <LineChart width={1120} height={500} data={subjectMarksData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="physics" stroke="#F004B8" />
                <Line type="monotone" dataKey="chemistry" stroke="blue" />
                <Line type="monotone" dataKey="math" stroke="green" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="math" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default LineCharts;