import { useImmer } from "use-immer";

const Test = () => {
    // const [state, updateState] = useImmer([
    //     {
    //         name: 'hung',
    //         age: 18
    //     },
    //     {
    //         name: 'tuan hung',
    //         age: 19
    //     }
    // ])

    // const updateProperty = (name, age) => {
    //     updateState(
    //          draft => {
    //             draft[1].name = name
    //             draft[1].age = age
    //             console.log(draft);
    //         }
    //         )
    // }
    // updateProperty('do tuan hung', 20)
    // console.log(state);
    // return <h1>hello i'm testing</h1>
    const [person, updatePerson] = useImmer({
        name: "Michel",
        age: 33
      });
    
      function updateName(name) {
        updatePerson(draft => {
          draft.name = name;
        });
      }
    
      function becomeOlder() {
        updatePerson(draft => {
          draft.age++;
        });
      }
       return (
        <div className="App">
          <h1>
            Hello {person.name} ({person.age})
          </h1>
          <input
            onChange={e => {
              updateName(e.target.value);
            }}
            value={person.name}
          />
          <br />
          <button onClick={becomeOlder}>Older</button>
        </div>
      );
}
export default Test