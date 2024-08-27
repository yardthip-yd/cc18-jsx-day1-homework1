function Profile () {

    const style1 = { width: '100px', height: '100px', borderRadius: '50%', marginTop: '25px'}

    return(
        <div>
            <img style={style1} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="profileimg" />
        </div>
    )
}

function Info () {
    const style2 = { textAlign: 'center', margin: '15px 0' }
    const style3 = { margin: '0', fontSize: '25px', fontWeight: 'bold' }
    const style4 = { margin: '5px 0', color: 'gray' }
    
    return (
        <div style={style2}>
            <h2 style={style3}>Julienne Moore</h2>
            <p style={style4}>julianne.moore@company.com</p>
        </div>
    )

}

function Follow () {

    const style4 = { display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '15px' }
    const style5 = { textAlign: 'center' }
    const style6 = { margin: '0', fontWeight: 'bold', fontSize: '20px' }
    const style7 = { margin: '5px 0', color: 'gray'}

    return (
    <div style={style4}>
        <div style={style5}>
            <p style={style6}>25</p>
            <p style={style7}>Posts</p>
        </div>
        <div style={style5}>
            <p style={style6}>350</p>
            <p style={style7}>following</p>
        </div>
        <div style={style5}>
            <p style={style6}>1.5K</p>
            <p style={style7}>follower</p>
        </div>
    </div>
    )
}


function ProfileCard () {

    const style8 = { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', margin: '0 auto', padding: '0 60px 25px 60px', border: '1px solid lightgray',borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }
    return (
        <div style={style8}>
            <Profile />
            <Info />
            <Follow />
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<ProfileCard />)