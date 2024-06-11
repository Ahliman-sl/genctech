export default function NavbarMenu() {
  return (
    <>
      <li>
        <a>Haqqımızda</a>
      </li>
      <li>
        <details>
          <summary>Tədris Proqramları</summary>
          <ul className="p-2">
            <li>
              <a>Front-end</a>
            </li>
            <li>
              <a>Back-end</a>
            </li>
            <li>
              <a>Full-stack</a>
            </li>
            <li>
              <a>Mern-stack</a>
            </li>
            <li>
              <a>Qa engineer</a>
            </li>
            <li>
              <a>DevOps engineer</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Təlimlər</a>
      </li>
      <li>
        <a>Tədbirlər</a>
      </li>
      <li>
        <a>Əlaqə</a>
      </li>
    </>
  );
}
