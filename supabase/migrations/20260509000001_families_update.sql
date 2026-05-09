-- Add adults column
ALTER TABLE families ADD COLUMN IF NOT EXISTS adults TEXT[] DEFAULT '{}';

-- Allow public delete on families
CREATE POLICY "Public delete families" ON families FOR DELETE USING (true);

-- Allow public update on families
CREATE POLICY "Public update families" ON families FOR UPDATE USING (true);

-- Update seed data with adults
UPDATE families SET adults = ARRAY['יוסף', 'רחל'] WHERE name = 'חמם';
UPDATE families SET adults = ARRAY['דוד', 'שרה'] WHERE name = 'כהן';
UPDATE families SET adults = ARRAY['משה', 'מרים'] WHERE name = 'לוי';
UPDATE families SET adults = ARRAY['אבי', 'נועה'] WHERE name = 'דוד';
UPDATE families SET adults = ARRAY['יצחק', 'לאה'] WHERE name = 'אברהם';
