import '../assets/codility.css';

const CodilityLessons = () => {
    return (
        <div className="code-container">
            <h1>Solutions to Codility Lessons in Python</h1>
            <br />
            <h3>List Odd Occurences</h3>
            <br />
            <hr />
            <code>
                <br />
                import collections 
                <br />
                <br />
                def solution(A):
                <br />
                    # write your code in Python 3.6
                <br />
                    if not A: return None;
                <br />
                    if len(A) == 1: return A[0];
                <br />
                    if len(A) % 2 == 0: return None;
                    <br />
                    <br />

                    A.sort()
                    <br />
                    occurences = collections.Counter(A)
                    <br />
                    <br />

                    for key, item in occurences.items():
                    <br />
                        if item == 1:
                        <br />
                        return key
                        <br />
            </code>
            <hr />
        </div>
    );
}

export default CodilityLessons