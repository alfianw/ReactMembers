const App = () => {
    const [member, setMember] = useState([]);
    
    useEffect(() => {
      fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(res =>{
        setMember(res.data);
        console.log(member)
      })
    }, [setMember])
      return(
        <div className="App">
          {member.map(list=>
                  <div className="card" key={list.id}>
                    <img src={list.avatar} />   
                    <ul>
                      <li>{list.fist_name} {list.last_name}</li>
                      <li>{list.email}</li>
                    </ul>
                  </div>
            )}
        </div>
      )
    }