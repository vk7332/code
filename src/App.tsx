/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import TdsCalculator from './components/TdsCalculator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow">
        <TdsCalculator />
      </main>
      <Footer />
    </div>
  );
}
