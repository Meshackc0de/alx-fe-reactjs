export default function UserProfile({name,age,bio}) {
    return ( 
        <diV style= {{border: '1px solid gray', padding: '10px', margin: '10px'}}>
            <h2 style= {{color: 'blue'}}>{name}</h2>
            <p><span style={{fontweight: 'bold' }}>{age}</span></p>
            <p>{bio}</p>
        </diV>
     );
}

