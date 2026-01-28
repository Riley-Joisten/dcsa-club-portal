import Image from 'next/image';
import Link from 'next/link';

// Reusable Event Card Component
const EventCard = ({ title, date, time, type, color }) => (
  <div className={`p-4 mb-3 rounded-lg shadow-sm ${color} text-white`}>
    <span className="text-xs font-semibold bg-white/30 px-2 py-0.5 rounded-full">{type}</span>
    <h3 className="text-lg font-semibold mt-1">{title}</h3>
    <p className="text-sm mt-1">{date} - {time}</p>
    <div className="mt-3">
      <button className="text-sm bg-white text-black font-medium px-4 py-1.5 rounded-full">Going / Interested</button>
    </div>
  </div>
);

const ClubProfile = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b mb-4">
        <div className="text-green-600 font-bold text-2xl">Campus<span className="text-black">Connect</span></div>
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <input type="text" placeholder="Search" className="w-full pl-8 pr-2 py-1 bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500" />
            <svg className="w-4 h-4 text-gray-400 absolute top-1/2 left-2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src="/path-to-your-user-avatar.jpg" alt="User Avatar" width={32} height={32} className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content - Left Column */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Club Profile</h1>
          
          {/* Cover and Club Info */}
          <div className="relative mb-6">
            <div className="h-64 w-full rounded-t-lg overflow-hidden">
              <Image src="/cover.png" alt="Club Cover" width={800} height={400} className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-8 left-4 flex items-end">
              <div className="w-24 h-24 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                <Image src="/logo.png" alt="DC Anime United Logo" width={80} height={80} className="object-contain" />
              </div>
              <div className="ml-4 mb-2">
                <h2 className="text-xl font-bold">DC Anime United</h2>
                <div className="flex items-center mt-2 space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium">Join Club</button>
                  {/* Social Icons */}
                  <div className="flex space-x-2">
                    <a href="#" className="text-pink-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.148-3.228 1.667-4.771 4.919-4.919 1.265-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.947.2 4.363 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.279.072-1.688.072-4.947 0-3.259-.014-3.668-.072-4.947-.2-4.363-2.625-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                    <a href="#" className="text-indigo-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.118.098.246.198.373.292a.077.077 0 01-.006.128c-.598.35-1.228.65-1.873.892-.042.016-.061.065-.041.106.352.699.764 1.364 1.226 1.994.02.031.054.043.085.028a19.894 19.894 0 005.993-3.03.08.08 0 00.031-.057c.473-5.236-.764-9.752-3.545-13.66a.072.072 0 00-.032-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              DC Anime United is a club doingpeceo for r-coxples credinine fowards opportunity students, started ono guoue and their ciotioning floebally. DC Anime asxcore .xims and community. Lcrsod is united what organizinrn ammt:ho;owlirngii-anime development and mathsms oufr.a: club and eneyeuwe and clubs. Inottramor, to youter prusas:nmnwer engagement ofsection in meeeodit monos, acctiviing awritavity and sponeli pradors and practice enchors to join our community.
            </p>
          </div>
        </div>

        {/* Right Column - Upcoming Events */}
        <div>
          <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
          <EventCard title="Weekly Screening: Attack on Titan" date="November, 2021" time="2:00 PM" type="Home Feed" color="bg-red-500" />
          <EventCard title="Manga Drawing Workshop" date="November, 2021" time="2:00 PM" type="Home Feed" color="bg-sky-500" />
          <EventCard title="DC Anime Workshop" date="January, 2021" time="2:00 PM" type="Home Feed" color="bg-purple-500" />
          <EventCard title="Weekly The Littachor" date="November, 2021" time="2:00 PM" type="Home Feed" color="bg-green-500" />
        </div>
      </div>
    </div>
  );
};

export default ClubProfile;