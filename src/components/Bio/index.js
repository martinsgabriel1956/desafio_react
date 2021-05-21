import './style.css';

import Avatar from '../../assets/avatar.jpeg';

export function Bio() {
  return (
    <main className="bio-container">
      <div className="user-info">
        <img src={Avatar} alt="avatar" />
        <h2>Gabriel Martins</h2>
        <p>martinsgabriel1956@gmail.com</p>
        <p>Rio de Janeiro/RJ</p>
      </div>
      <div className="statics">
        <div className="data">
          <h2>143</h2>
          <p>Seguidores</p>
        </div>
        <div className="data">
          <h2>466</h2>
          <p>Seguidores</p>
        </div>
        <div className="data">
          <h2>52</h2>
          <p>Repos</p>
        </div>
      </div>
      <div className="bio">
        <h2>Bio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus aspernatur dolore quia voluptates molestias, eaque expedita exercitationem distinctio recusandae pariatur accusantium perferendis atque quasi sed obcaecati, fugit numquam in.</p>
      </div>
    </main>
  );
}