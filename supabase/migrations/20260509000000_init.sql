-- Ticker messages (running banner on homepage)
CREATE TABLE IF NOT EXISTS ticker_messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  text TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Families
CREATE TABLE IF NOT EXISTS families (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  members INT DEFAULT 1,
  kids TEXT[] DEFAULT '{}',
  phone TEXT,
  whatsapp_url TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Gallery photos
CREATE TABLE IF NOT EXISTS gallery_photos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  url TEXT NOT NULL,
  uploader TEXT,
  family_tag TEXT,
  likes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE ticker_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE families ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_photos ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read ticker" ON ticker_messages FOR SELECT USING (true);
CREATE POLICY "Public read families" ON families FOR SELECT USING (true);
CREATE POLICY "Public read gallery" ON gallery_photos FOR SELECT USING (true);

-- Public insert for families and gallery
CREATE POLICY "Public insert families" ON families FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert gallery" ON gallery_photos FOR INSERT WITH CHECK (true);

-- Public update for gallery likes
CREATE POLICY "Public update gallery likes" ON gallery_photos FOR UPDATE USING (true);

-- Public write for ticker (admin will handle auth client-side)
CREATE POLICY "Public write ticker" ON ticker_messages FOR ALL USING (true);

-- Seed ticker messages
INSERT INTO ticker_messages (text, active, sort_order) VALUES
  ('לא לשכוח דרכונים! ✈️', true, 1),
  ('ארוחת ערב יום שני – 19:30 🍽️', true, 2),
  ('מפגש בלובי ב-08:15 ⏰', true, 3),
  ('להביא בגד ים בתיק היד! 🏊', true, 4),
  ('לא לשכוח מתאם חשמל אירופי 🔌', true, 5),
  ('הצמיד = הכל! לא להסיר 📿', true, 6);

-- Seed families
INSERT INTO families (name, members, kids, phone, whatsapp_url) VALUES
  ('חמם', 6, ARRAY['נועה', 'יונתן', 'עידן', 'שירה'], '050-000-0001', 'https://wa.me/972500000001'),
  ('כהן', 4, ARRAY['דניאל', 'מיכל'], '050-000-0002', 'https://wa.me/972500000002'),
  ('לוי', 5, ARRAY['אור', 'ליאם', 'מיה'], '050-000-0003', 'https://wa.me/972500000003'),
  ('דוד', 3, ARRAY['תומר'], '050-000-0004', 'https://wa.me/972500000004'),
  ('אברהם', 4, ARRAY['יובל', 'עדן'], '050-000-0005', 'https://wa.me/972500000005');
