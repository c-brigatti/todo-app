export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">
            {tabs.map((tab, i) => {
                const isSelected = tab === selectedTab

                const numOfTasks = () => {
                    if(tab === 'All') {
                        return todos.length
                    }
                    else if(tab === 'Open') {
                        return todos.filter(val => !val.complete).length
                    }
                    else {
                        return todos.filter(val => val.complete).length
                    }
                }

                return (
                    <button
                        onClick={() => {
                            setSelectedTab(tab)
                        }}
                        key={i}
                        className={`tab-button ${isSelected ? "tab-selected" : ""}`}>
                        <h4>{tab} <span>({numOfTasks()})</span></h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}