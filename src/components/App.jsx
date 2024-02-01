import user from '../data/user.json';
import { Profile } from './Profile/Profile';

import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 5,
        paddingY: 3,
        width: '100%',
        backgroundColor: 'muted',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
