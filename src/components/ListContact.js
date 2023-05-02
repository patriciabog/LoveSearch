import Contact from "./Contact";

function ListContact({ contactList }) {
    const dataHtml = contactList.map((eachContact) => {
   return (<Contact eachContact={eachContact} key={eachContact.id}/>
   );
    });
  return (
     <section className="list">
        <ul className="cards">{dataHtml}</ul>
     </section>
  );
    
}
export default ListContact;