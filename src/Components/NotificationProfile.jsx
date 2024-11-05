
const NotificationProfile = () => {
  return (
    <div className="flex items-center justify-end space-x-4 p-2 bg-white shadow-sm">
      {/* Notification Bell Icon */}
      <button className="relative p-2 bg-blue-100 rounded-full">
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-2.485-1.513-4.667-3.722-5.434A2.003 2.003 0 0012 4c-.723 0-1.385.385-1.722.992C7.513 6.333 6 8.515 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m1 3h4m-2-3v2m0-2v-2"
          ></path>
        </svg>
      </button>

      {/* Profile Avatar */}
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default NotificationProfile;
