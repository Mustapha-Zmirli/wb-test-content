export default function Article29() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Evolution of Responsive Web Design
        </h1>
        <div className="text-gray-600 text-sm">
          Published on {new Date().toLocaleDateString()} | By Web Design Team
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8 border border-blue-100">
          <p className="text-lg text-gray-700 italic text-center">
            "From mobile-first to context-aware interfaces, responsive design continues to adapt to an increasingly diverse device landscape."
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 pb-2 border-b border-gray-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          The Mobile-First Revolution
        </h2>
        <p>
          With mobile internet usage surpassing desktop, the industry shifted to a mobile-first approach. 
          Instead of scaling down desktop designs, designers now start with mobile interfaces and progressively 
          enhance them for larger screens using CSS media queries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="text-blue-500 font-bold text-3xl mb-2">2010</div>
            <div className="font-medium">Fixed Width Designs</div>
            <div className="text-sm text-gray-600 mt-2">Separate mobile sites</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="text-blue-500 font-bold text-3xl mb-2">2015</div>
            <div className="font-medium">Responsive Design</div>
            <div className="text-sm text-gray-600 mt-2">Fluid grids & media queries</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="text-blue-500 font-bold text-3xl mb-2">2020+</div>
            <div className="font-medium">Adaptive Design</div>
            <div className="text-sm text-gray-600 mt-2">Context-aware experiences</div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 pb-2 border-b border-gray-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          CSS Frameworks and Tools
        </h2>
        <p>
          The rise of CSS frameworks like Bootstrap, Foundation, and Tailwind CSS has dramatically accelerated 
          responsive design implementation. These tools provide pre-built components and grid systems that 
          automatically adapt to different screen sizes.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg my-6">
          <h3 className="font-semibold text-gray-800 mb-3">Key Breakpoints in 2023</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">Mobile:</span>
              <span className="font-medium">&lt; 768px</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Tablet:</span>
              <span className="font-medium">768px - 1024px</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Laptop:</span>
              <span className="font-medium">1024px - 1440px</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Desktop:</span>
              <span className="font-medium">&gt; 1440px</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 pb-2 border-b border-gray-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Future Trends: Beyond Screen Size
        </h2>
        <p>
          Modern responsive design considers more than just screen dimensions. Designers now account for:
        </p>
        <ul className="list-disc pl-5 my-4">
          <li className="mb-2"><span className="font-medium">Network conditions</span> - Adjusting content based on connection speed</li>
          <li className="mb-2"><span className="font-medium">Input methods</span> - Optimizing for touch, mouse, or keyboard</li>
          <li className="mb-2"><span className="font-medium">Environmental factors</span> - Adapting to light conditions with dark/light modes</li>
          <li className="mb-2"><span className="font-medium">Accessibility needs</span> - Responding to user preferences for reduced motion</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-blue-800 font-semibold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Key Takeaway
          </h3>
          <p className="text-blue-700 m-0">
            The future of responsive design lies in creating truly adaptive experiences that respond not just to screen size, 
            but to the user's context, capabilities, and preferences.
          </p>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="font-medium text-gray-700 mb-3">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Development</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">CSS Frameworks</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">User Experience</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Frontend Development</span>
        </div>
      </footer>
    </div>
  );
}