import React from 'react';
import './SubmissionSuccess.css'; // We'll create this CSS file next

const SubmissionSuccess = () => {
  return (
    <div className="container">
      <h1>درخواست جمع کروائی گئی!</h1>
      <p>شکریہ! آپ کی درخواست کامیابی سے جمع ہوگئی ہے۔ ہم جلد رابطہ کریں گے۔</p>
      <button onClick={() => window.location.href = '/machinery-rental'}>واپس جائیں</button>
    </div>
  );
};

export default SubmissionSuccess;