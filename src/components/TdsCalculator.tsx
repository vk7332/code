import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { tdsRates, TdsRate } from '../data/tdsRates';

const TdsCalculator: React.FC = () => {
  const [deducteeType, setDeducteeType] = useState<'individual' | 'other'>('individual');
  const [panAvailable, setPanAvailable] = useState<'yes' | 'no'>('yes');
  const [paymentType, setPaymentType] = useState<TdsRate | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number | ''>('');
  const [totalTds, setTotalTds] = useState<number>(0);

  useEffect(() => {
    calculateTds();
  }, [deducteeType, panAvailable, paymentType, paymentAmount]);

  const calculateTds = () => {
    if (!paymentType || paymentAmount === '' || paymentAmount <= 0) {
      setTotalTds(0);
      return;
    }

    if (paymentAmount < paymentType.threshold) {
      setTotalTds(0);
      return;
    }

    let rate = 0;
    if (panAvailable === 'no') {
      rate = 20; // Higher rate if PAN is not available
    } else {
      rate = deducteeType === 'individual' ? paymentType.individualRate : paymentType.otherRate;
    }

    const tds = (paymentAmount * rate) / 100;
    setTotalTds(tds);
  };

  const options = tdsRates.map(rate => ({ label: rate.label, value: rate }));

    return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <p className="text-gray-600">
          <a href="https://www.vktax.in" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:underline">*VK Tax</a> is led by a qualified Income Tax Practitioner holding M.Com & LL.B., focused on helping individuals file accurate and compliant tax returns.
        </p>
        <div className="mt-4 text-left inline-block bg-white p-4 shadow-sm rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg mb-2"><span className="text-teal-600">&#9733;</span> Professional Income Tax Filing & Advisory</h3>
            <ul className="list-none text-gray-700 space-y-1">
                <li><span className="text-teal-500 mr-2">&#10003;</span>ITR Filing for Salaried</li>
                <li><span className="text-teal-500 mr-2">&#10003;</span>File Forms 10E/10G/10H etc</li>
                <li><span className="text-teal-500 mr-2">&#10003;</span>Capital Gains Computation</li>
                <li><span className="text-teal-500 mr-2">&#10003;</span>Tax Planning & Deduction Optimization</li>
                <li><span className="text-teal-500 mr-2">&#10003;</span>Notice Handling Support</li>
            </ul>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row border border-gray-200">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 border-r border-dashed border-gray-300">
          <h2 className="text-2xl font-bold mb-2">Calculate your TDS</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Deductee Type</label>
              <div className="flex items-center">
                <label className="inline-flex items-center mr-6">
                  <input type="radio" className="form-radio" name="deducteeType" value="individual" checked={deducteeType === 'individual'} onChange={() => setDeducteeType('individual')} />
                  <span className="ml-2">Individual</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="deducteeType" value="other" checked={deducteeType === 'other'} onChange={() => setDeducteeType('other')} />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-teal-700 text-sm font-semibold mb-2">PAN available? *</label>
              <div className="flex items-center">
                <label className="inline-flex items-center mr-6">
                  <input type="radio" className="form-radio" name="panAvailable" value="yes" checked={panAvailable === 'yes'} onChange={() => setPanAvailable('yes')} />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="panAvailable" value="no" checked={panAvailable === 'no'} onChange={() => setPanAvailable('no')} />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-teal-700 text-sm font-semibold mb-2" htmlFor="paymentType">Type of Payment *</label>
              <Select
                id="paymentType"
                options={options}
                onChange={(option) => setPaymentType(option ? option.value : null)}
                placeholder="Select Payment Type"
                isClearable
              />
            </div>

            <div className="mb-6">
              <label className="block text-teal-700 text-sm font-semibold mb-2" htmlFor="paymentAmount">Payment Amount *</label>
              <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                  <input
                      id="paymentAmount"
                      type="number"
                      className="pl-7 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value === '' ? '' : parseFloat(e.target.value))}
                      placeholder="Enter Amount"
                  />
              </div>
            </div>

            <button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
              Download
            </button>
          </form>
        </div>

        {/* Display Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-yellow-50 rounded-r-lg flex flex-col justify-between items-center">
          <div className="text-center w-full">
            <div className="w-full h-64 bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center mb-4">
              <span className="text-gray-500">Adsense Space (300x250)</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-inner w-full">
                <p className="text-gray-500">Total TDS</p>
                <p className="text-4xl font-bold text-red-500">₹{totalTds.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <div className="w-full mt-8 p-4 bg-blue-600 text-white rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="font-semibold">Get Tax-Free** Fixed returns up to 7.5%*</p>
            </div>
            <p className="text-sm mb-2">With Axis Max Life Guaranteed Savings Life Insurance Solutions</p>
            <div className="flex justify-between items-center">
                <p className="text-xs">Get Returns in just 5 years<br/>Save tax up to Rs. 46,800**</p>
                <a href="#" className="bg-white text-blue-600 font-bold py-1 px-3 rounded-full text-sm hover:bg-gray-100">View Plans</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TdsCalculator;
