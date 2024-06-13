import statisticProfileImage from "../../assets/statisticProfileImage.webp";
export default function Statics() {
  return (
    <div className="stats shadow stats-vertical 2xl:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Tələbə sayı</div>
        <div className="stat-value text-primary">246</div>
        <div className="stat-desc">Ötən ayla müqayisədə 21% artım</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Səhifə Baxışları</div>
        <div className="stat-value text-secondary">14.6k</div>
        <div className="stat-desc">Ötən ayla müqayisədə 14% artım</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={statisticProfileImage} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="stat-value">84%</div>
        <div className="stat-title">Aylıq Hədəflər</div>
        <div className="stat-desc text-secondary">8 tapşırıq qalıb</div>
      </div>
    </div>
  );
}
