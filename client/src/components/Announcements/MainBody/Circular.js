import React from 'react';

function Circular(props) {
  return (
    <div class="circular">
            <a target = '_blank' href="https://www.imsnsit.org/imsnsit/notifications.php">
                <h4>
                    {props.title}
                </h4>
            </a>
            <p>{props.issuedBy}</p>
            <hr />
    </div>
  );
}

export default Circular;
