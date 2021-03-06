const contentNode = document.getElementById("contents");

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>
                    {issue.completionDate ? issue.completionDate.toDateString() : ""}
                </td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

// IssueRow.propTYpes = {
//     issue_id: React.propTypes.number.isRequired,
//     issue_title: React.propTypes.string
// };
class IssueFilter extends React.Component {
    render() {
        return <div>This is a placeholder for the Issue Filter.</div>;
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => (
            <IssueRow key={issue.id} issue={issue} />
        ));
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>{issueRows}</tbody>
            </table>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return <div>This is a placeholder for the Issue Add entry form.</div>;
    }
}
const issues = [
    {
      id: 1, status: 'Open', owner: 'Ravan',
      created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
      title: 'Error in console when clicking Add',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie',
      created: new Date('2016-08-16'), effort: 14, 
  completionDate: new Date('2016-08-30'),
      title: 'Missing bottom border on panel',
    },
    {
        id: 3, status: 'Assigned', owner: 'dicko',
        created: new Date('2014-08-17'), effort: 10, 
    completionDate: new Date('2019-08-30'),
        title: 'bottom border on panel',
      },
  ];



class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);