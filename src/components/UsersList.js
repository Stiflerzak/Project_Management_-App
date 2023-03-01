import { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, List, ListItem, Typography } from '@mui/material';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users data from server
    fetch('/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          All Users
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <Avatar alt={user.name} src={user.avatar} />
              <div>
                <Typography variant="subtitle1">{user.name}</Typography>
                <Typography variant="body2">{user.email}</Typography>
                <Typography variant="body2">{user.role}</Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UsersList;
