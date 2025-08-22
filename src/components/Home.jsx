function Home(){
    return (
    <div>
    <div className="card rounded-4 m-5">
        <h1 className="card-body">Budgeteer</h1>
        <div className="card-body">
            Budgeting is the process of creating a plan to spend your money. 
            This spending plan is called a budget. Creating this spending plan allows 
            you to determine in advance whether you will have enough money to do the 
            things you need to do or would like to do.
        </div>
    </div>

    <div className="card rounded-4 m-5">
        <h1 className="card-body">Total Income</h1>
        <div className="card-body">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Job</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  placeholder="$"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Other</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="$"/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home;