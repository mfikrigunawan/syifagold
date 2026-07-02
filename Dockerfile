# Gunakan Node.js 22 versi ringan
FROM node:22-alpine

# Folder kerja di dalam container
WORKDIR /app

# Copy package.json terlebih dahulu
COPY package*.json ./

# Install dependency
RUN npm install

# Copy seluruh source code
COPY . .

# Buka port Next.js
EXPOSE 3000

# Jalankan development server
CMD ["npm", "run", "dev"]