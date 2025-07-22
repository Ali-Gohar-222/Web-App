import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FarmerRegistration.css';

const FarmerRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/submission-success'); // Navigate to success page
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => navigate('/machinery-rental')}>← واپس</button>
        <h2>درخواست فارم</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>کاسم کا نام*</label>
          <input type="text" placeholder="کاسم کا نام" />
        </div>
        <div className="form-group">
          <label>والد کا نام*</label>
          <input type="text" placeholder="والد کا نام" />
        </div>
        <div className="form-group">
          <label>سی این آئی سی نمبر*</label>
          <input type="text" value="03659047855" readOnly />
        </div>
        <div className="form-group">
          <label>فون نمبر*</label>
          <input type="text" value="247354" />
        </div>
        <div className="form-group">
          <label>پتہ*</label>
          <input type="text" placeholder="پتہ" />
        </div>
        <div className="form-group">
          <label>ضلع*</label>
          <select>
            <option value="">ضلع منتخب کریں</option>
            <option value="district1">ضلع 1</option>
            <option value="district2">ضلع 2</option>
          </select>
        </div>
        <div className="form-group">
          <label>عمر (سال)</label>
          <input type="number" value="20" />
        </div>
        <div className="form-group">
          <label>میں اس کے ساتھ اتفاق کرتا ہوں</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> شرائط
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> پالیسی
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> تصدیق شدہ
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>میں راضی ہوں</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" /> واٹس ایپ
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> نوٹیفکیشن
            </label>
          </div>
        </div>
        <button type="submit">درخواست اپ لوڈ کریں</button>
      </form>
    </div>
  );
};

export default FarmerRegistration;