import React from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../redux/store/actionCreators/user';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user)

  console.log(users, loading, error);
  const {fetchUsers} = useActions()

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>  
      )}
    </div>
  )
}

export default UserList